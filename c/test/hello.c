#include <stdio.h>
#include <inttypes.h>

typedef struct coord {
    uint32_t x;
    uint32_t y;
} coord;

int main() {
//    printf("hullo there\n");
//
//    coord c1, *d = NULL;
//    c1.x = 2;
//    printf("%d\n", c1.x);
//    int i = 2;
//    int *p = &i; // creates a variable p which points to the i variable
//    printf("%p\n", p);
//    printf("%d\n", *p);
//    void *r = p;
//    printf("%p\n", r);
//    printf("%p\n", d);
//    int y = d->y;
//    printf("%d", y);

//    void setX(coord *c, int x) {
//        c->x = x;
//    }
//
//    setX()

//    int ar[] = {5, 13, 42, 2};
//    int *arr =  &ar;
//    int len = 4;
//    len = cond_append(&arr, len, 42);

    // s19: try with 2 and 3 (2 should output a size of 0x108

    // s20: local variable only available within the function and can't be accessed from the main

//    int i = 2;
//    int* a, b;
//    a = &i;
//    b = 3;
//    printf("%p\n", a);
//    printf("%p\n", &i);

    int ar[] = {5, 13, 42, 2, 7, 8};
    int *ip = &ar;
//    ip = ip + 3;
    printf("%d\n", *(ip+3));

    void *vp = &ar;
    printf("%p\n", &vp);
    return 0;
}

//int cond_append(int **a, int len, int e) {
//    int i, j, *p = *a;
//    printf("huhu %d\n", *p);
//    printf("hehe %d", i);
//    printf("haha %d", j);
//    for (i= 0; i< len; i++, p++) {
//        if (*p == e) return len; // FOUND!
//    }
//    p = (int*)malloc((len+ 1) * sizeof(int));
//    memcpy(p, *a, len* sizeof(int));
//    p[len] = e;
//    free(*a);
//    *a = p;
//    return len+1;
//}

