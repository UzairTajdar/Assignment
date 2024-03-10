#include <iostream>
using namespace std;

int Fibo(int n){
    if ( n==0 ) return 0;
    else if (n == 1) return 1;
    else{
        int first = 0;
        int second = 1;
        for (int i = 2; i <= n; i++)
        {
            int third  = first + second ;
            first = second ;
            second = third ; 
        }
        return second;
    }
    
    
}
int main(){
   cout<<Fibo(8);
    return 0;
}