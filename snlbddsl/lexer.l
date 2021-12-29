%{
#include <string.h>
#include "parser.tab.h"
extern int lineno;
extern int colno;
extern int yylval;
%}

%%
[0-9]+      { colno += strlen(yytext); yylval = atoi(yytext); return NUMBER; }
" "         { colno++; };
\;\;.*$     { colno = 10000; }
-\>         { colno += 2; return ARROW; }
x           { colno++; return CROSS; }
\n          { lineno++; colno = 0; }
%%
