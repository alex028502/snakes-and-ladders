TMP=src/tmp
TRANSPILER_DIR=snlbddsl
TRANSPILER=$(TRANSPILER_DIR)/transpiler
SOURCE_PATH=src/board.snlbddsl
TARGET_PATH=$(TMP)/board.js
MAP_NAME=board.js.map
MAP_PATH=$(TMP)/$(MAP_NAME)
SM=$(TRANSPILER_DIR)/sm.js
BUNDLE_PATH=resources/public/index.js


.PHONY: $(TRANSPILER)

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
