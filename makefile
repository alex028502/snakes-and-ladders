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

.PHONY: $(TRANSPILER)

default: $(PUBLIC_DIR)/favicon.ico $(BUNDLE_PATH) $(MAP_PATH) $(PUBLIC_DIR)/192.png $(PUBLIC_DIR)/512.png
$(PUBLIC_DIR)/favicon.ico: makefile
	convert -size 16x16 -background white -pointsize 12 -font $F label:1 $@
$(PUBLIC_DIR)/192.png: $(PUBLIC_DIR)/512.png makefile
	convert $< -resize 192x192 $@
$(PUBLIC_DIR)/512.png: makefile
	convert -size 512x512 -background white -pointsize 200 -font $F label:1 $@
$(BUNDLE_PATH): src/index.js $(MAP_PATH) $(TARGET_PATH)
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
clear:
	rm -rf $(TMP) $(BUNDLE_PATH)
