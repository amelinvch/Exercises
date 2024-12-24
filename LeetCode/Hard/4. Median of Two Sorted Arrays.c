#include "4. Median of Two Sorted Arrays.h"
#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

double findMedianSortedArrays(const int* nums1, const int nums1Size, const int* nums2, const int nums2Size) {
    const int size3 = nums1Size + nums2Size;
    int arr3[size3];

    for (int i = 0; i < nums1Size; ++i) {
        arr3[i] = nums1[i];
    }
    for (int i = 0; i < nums2Size; ++i) {
        arr3[nums1Size + i] = nums2[i];
    }

    qsort(arr3, size3, sizeof(int), compare);

    const int mid = size3 / 2;

    return size3 % 2 == 0 ? (arr3[mid] + arr3[mid - 1]) / 2.0 : arr3[mid];
}

void mainFindMedianSortedArrays() {
    printf("Find Median Sorted Arrays:\n");
    const int nums1[] = {1, 2}, nums2[] = {3,4};
    const int nums1Size = sizeof(nums1)/sizeof(nums1[0]);
    const int nums2Size = sizeof(nums2)/sizeof(nums2[0]);

    const double medianNum = findMedianSortedArrays(nums1, nums1Size, nums2, nums2Size);
    printf("\n Median of Two Sorted Arrays: %f \n", medianNum);
}