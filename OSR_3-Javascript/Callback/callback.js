function fun() {
  console.log('the exam is done ');
}
function fun2(fun) {
  console.log('result is out ');
  fun();
}
fun2(fun);
