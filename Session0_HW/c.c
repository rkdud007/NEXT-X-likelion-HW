#pragma warning(disable:4996)
#include <stdio.h>

int main() {
	int a;
	scanf("%d",&a);
	int arr[a];
	for(int i=0;i<a;i++){
		arr[i] = i;
		printf("%d\n",arr[i]);
	}
	return 0;
}