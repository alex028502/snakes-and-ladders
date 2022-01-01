TMP=src/tmp
TRANSPILER_DIR=snlbddsl
TRANSPILER=$(TRANSPILER_DIR)/transpiler
SOURCE_PATH=src/board.snlbddsl
TARGET_PATH=$(TMP)/board.js
MAP_NAME=board.js.map
MAP_PATH=$(TMP)/$(MAP_NAME)
SM=$(TRANSPILER_DIR)/sm.js
PUBLIC_DIR=resources/public
BUNDLE_PATH=$(PUBLIC_DIR)/index.js
F=Liberation-Mono
IMG=https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Game%2C_board_%28AM_1999.143.26-1%29.jpg/253px-Game%2C_board_%28AM_1999.143.26-1%29.jpg

.PHONY: $(TRANSPILER)

default: $(PUBLIC_DIR)/favicon.ico $(BUNDLE_PATH) $(MAP_PATH) $(PUBLIC_DIR)/192.png $(PUBLIC_DIR)/512.png $(PUBLIC_DIR)/image.jpg
$(PUBLIC_DIR)/favicon.ico: makefile
	convert -size 16x16 -background '#476738' -pointsize 12 -gravity center -font $F label:1 $@
$(PUBLIC_DIR)/192.png: $(PUBLIC_DIR)/512.png makefile
	convert $< -resize 192x192 $@
$(PUBLIC_DIR)/512.png: makefile
	convert -size 512x512 -background '#d9b835' -pointsize 200 -gravity center -font $F label:100 $@
$(BUNDLE_PATH): src/index.js $(MAP_PATH) $(TARGET_PATH) package-lock.json
	node_modules/.bin/esbuild --bundle $< --outfile=$@ --sourcemap
$(MAP_PATH): $(SM) $(TARGET_PATH) $(SOURCE_PATH)
	node $^ > $@
$(TARGET_PATH): $(SOURCE_PATH) $(TRANSPILER) makefile $(TMP)
	$(TRANSPILER) < $< > $@
	echo >> $@
	echo "//# sourceMappingURL=$(MAP_NAME)" >> $@
$(TMP):
	mkdir -p $@
$(TRANSPILER):
	$(MAKE) -C $(TRANSPILER_DIR)
$(PUBLIC_DIR)/image.jpg: image.jpg
	cp $< $@
	touch $@
image.jpg: makefile
	wget -O $@ $(IMG)
	touch $@
clear:
	rm -rf $(TMP) $(BUNDLE_PATH)
