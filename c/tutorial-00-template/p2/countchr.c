#include "countchr.h"
#include <stdio.h>
#include <string.h>

int countchr(char *string, char c) {
//	(void) string;
//	(void) c;
	// Add code here.
    int count = 0;
    int stringLength = (int)strlen(string);

    for (int i = 0; i < stringLength; i++, string++) {
        if (*string == c) {
//            printf("Looking for %c found %c\n", *string);
            count++;
        }

    }

	return count;
}