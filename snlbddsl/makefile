transpiler: lex.yy.o parser.tab.o
	gcc -o $@ $^ -ll
parser.o: parser.tab.c
	gcc -c $^
lex.yy.o: lex.yy.c parser.tab.h
	gcc -c $<
parser.tab.c parser.tab.h: parser.y
	bison -d $<
lex.yy.c: lexer.l
	flex $<
clear:
	rm -f *.o *.c *.h
