#include "greet.h"
#include <stdio.h>

void greet(int32_t times) {
//	(void) times;
	// Add code here.
	for(int i = 0; i < times; i++) {
        printf("%d Hello World!\n", i+1);
	}
}