import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:introduction_screen/introduction_screen.dart';
import 'package:dots_indicator/dots_indicator.dart';

void main() {
  runApp(const TabBarDemo());
}
class TabBarDemo extends StatelessWidget {
  void _onIntroEnd(context) {
    Navigator.of(context).push(
      MaterialPageRoute(builder: (_) => HomePage()),
    );
  }
  List<PageViewModel> getPages(){
    return [
      PageViewModel(
        title: "YOGA Surge",
        body: "Welcome to Yoga World,Inhale the Future,Exhale the past.",
        image: Center(child: Image.asset("assets/page1.png", height: 175.0))
      ),
      PageViewModel(
        title: "HEALTHY Freaks Exercises",
        body: "Letting go is the hardest asana",
        image: Center(child: Image.asset("assets/page2.png", height: 175.0))
      ),
      PageViewModel(
        title: "Cycling",
        body: "You cannot always control what "
            "goes on outside. But you can always "
            "control what goes on inside",
        image: Center(child: Image.asset("assets/page3.png", height: 175.0))
      ),
      PageViewModel(
        title: "MEDITATION",
        body: "The longest journey of any person is the journey inward",
        image: Center(child: Image.asset("assets/page4.png", height: 175.0))
      )
    ];
  }
  const TabBarDemo({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home:Builder(
        builder: (context)=>Scaffold(
      body: IntroductionScreen(
        globalBackgroundColor: Colors.white60,
        pages: getPages(),
        done: Text('Get started',style: TextStyle(color: Colors.black),),
        onDone: (){
          _onIntroEnd(context);
        },
        showSkipButton: true,
        showNextButton: true,
        skip: Text("Skip",style: TextStyle(color: Colors.black)),
        next: Text("Next",style: TextStyle(color: Colors.black)),
        dotsDecorator: DotsDecorator(
          size: const Size.square(9.0),
          activeSize: const Size(18.0, 9.0),
          color: Colors.black,
          activeColor: Colors.black,
          activeShape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(5.0)),
        ),
      ),
    ))
    );
  }}
class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          toolbarHeight: 100,
        leading: Container(
          child: new IconButton(onPressed: (){
            Navigator.pop(context);

          }, icon: Icon(Icons.arrow_back),iconSize: 30,
            padding: EdgeInsets.symmetric(vertical: 0,horizontal: 20),),
        ),
        title: Text("Welcome",style: TextStyle(
          fontSize: 35,

        ),),
        centerTitle: true,
        backgroundColor: Color.fromRGBO(0, 0, 0, 0),
        elevation: 1,),
      body: Center(
        child: Column(
          children: [
            Image.asset('assets/welcome.png'),
            Text("Rahul R",style: TextStyle(
              fontSize: 40,
              fontWeight: FontWeight.bold
            ),),
            SizedBox(height: 30),
            Text("an MCA student, who likes to learn new things!!",textAlign: TextAlign.center,style: TextStyle(
                fontSize: 20,
                letterSpacing: .2
            ),)
            
          ],
        ),
      ),
    )
    );
  }
}