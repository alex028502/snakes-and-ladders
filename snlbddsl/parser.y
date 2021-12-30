%{
#include <stdio.h>
int lineno = 1;
int colno = 0;
%}

%token                  ARROW CROSS NUMBER

%%


statements:     /* empty */ | statements statement;
        ;
statement:      board;
        |       shortcut;
board:          NUMBER CROSS NUMBER { printf("const goal = %d; // %d,%d\n", $1 * $3, colno, lineno); };
shortcut:       NUMBER ARROW NUMBER { printf("shortcuts[%d] = %d; // %d,%d\n", $1, $3, colno, lineno); };

%%

extern FILE *yyin;

int main() {
    printf("const shortcuts = {};\n");
    do {
        yyparse();
    } while(!feof(yyin));
    printf("module.exports = [shortcuts, goal];\n");
}

int yyerror(s)
char *s;
{
    fprintf(stderr, "%s:-)\n", s);
}
