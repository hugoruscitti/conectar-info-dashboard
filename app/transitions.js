export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('events'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('help'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('events'),
    this.toRoute('help'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
