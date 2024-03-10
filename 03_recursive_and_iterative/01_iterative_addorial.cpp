#include<iostream>
using namespace std;

int Addorial(int n){
    int x = n;
    for (int i = n-1; i >= 0; i--)
    {
        x = i + x;
    }
    return x;
}
int main(){
   cout<<Addorial(20);
    return 0;
}