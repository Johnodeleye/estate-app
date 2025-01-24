import { SplashScreen, Stack } from "expo-router";
import './globals.css';
import { useFonts } from 'expo-font';
import { useEffect } from "react";
import GlobalProvider from "@/lib/global-provider";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require('../assets/fonts/Rubik-Bold.ttf'),
    "Rubik-Extrabold": require('../assets/fonts/Rubik-ExtraBold.ttf'),
    "Rubik-Light": require('../assets/fonts/Rubik-Light.ttf'),
    "Rubik-Medium": require('../assets/fonts/Rubik-Medium.ttf'),
    "Rubik-Regular": require('../assets/fonts/Rubik-Regular.ttf'),
    "Rubik-SemiBold": require('../assets/fonts/Rubik-SemiBold.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded) {
      console.log("fonts have loaded");
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GlobalProvider>
        <Stack screenOptions={{headerShown:false}}/>
        {/* //this headershown:false will hide the header tabs in the screen */}
    </GlobalProvider>
  )
}



// 1. "You Don't Need to Be Perfect to Start 🚀"
// "Perfection is a myth. When I started coding, I didn't have it all figured out—and that's okay! Growth happens when you take action. Start with what you know, keep learning, and watch yourself get better every single day. 💡 Stop waiting for the perfect moment—start now!"

// 2. "The Real Secret to Mastering Coding 💻"
// "Want to become a great developer? Here's the secret—consistency. It's not about coding for 10 hours once a week, it's about showing up every day, even if it's just for 30 minutes. Small efforts compound into big results. Stay consistent, and watch how far you'll go! 🚀"

// 3. "From Beginner to Pro? Here's the Shortcut 🔑"
// "The fastest way to grow in tech? Build projects! Stop waiting for the 'right time' or endless tutorials. Pick a small idea, build it, fail, learn, repeat. Projects teach you more than any course ever will. Start today—just take that first step! 💥"

// 4. "Why You're Struggling as a New Coder 😬"
// "Struggling to stay motivated? It's because you're focusing on the wrong thing. Stop comparing your journey to others! Focus on your growth, your wins, and your pace. Remember, every expert was once a beginner. Keep pushing—you've got this! 💪"

// 5. "What I Wish I Knew When Starting Coding 🎯"
// "If I could go back, here's what I'd tell my beginner self: 1️⃣ Focus on one language at a time. 2️⃣ Build small projects early. 3️⃣ Join tech communities—never code alone! Coding is a marathon, not a sprint. Trust the process and stay patient. 🚀"

// Do you want me to help you brainstorm hashtags or video ideas around these?







// You said:
// okkkk this is better pls now give me the description and the hashtags together thanks
// ChatGPT said:
// ChatGPT
// Here are the descriptions and hashtags for each of the 15-20 second video scripts:

// 1. "You Don't Need to Be Perfect to Start 🚀"
// 🎯 Description:
// "Perfection is holding you back! Stop overthinking and take that first step. Growth happens when you start, not when you're perfect. 🎯 Start coding today and watch how far you can go!"

// 📌 Hashtags:
// #CodingMotivation #TechJourney #BeginnersInTech #LearnToCode #GrowthMindset #TechInspiration #KeepLearning

// 2. "The Real Secret to Mastering Coding 💻"
// 🎯 Description:
// "Consistency > Intensity! 🔑 The secret to mastering coding is showing up every day, even for 30 minutes. Small daily habits will take you further than occasional sprints. Stay consistent and watch your skills grow! 🚀"

// 📌 Hashtags:
// #ConsistencyIsKey #CodingTips #LearnToCode #TechEducation #CodingJourney #MotivationMonday #TechSuccess

// 3. "From Beginner to Pro? Here's the Shortcut 🔑"
// 🎯 Description:
// "Stop waiting for the 'perfect time'—it doesn't exist! 🚀 The best way to level up as a developer is by building projects. Fail, learn, repeat! 💡 Each project teaches you something new. Start now and watch your skills grow!"

// 📌 Hashtags:
// #BuildToLearn #SelfTaughtDeveloper #CodeNewbie #TechTips #SoftwareDevelopment #LearnByDoing #Inspiration

// 4. "Why You're Struggling as a New Coder 😬"
// 🎯 Description:
// "Feeling stuck in your coding journey? 😟 It's not you—it's your mindset. Stop comparing yourself to others and focus on YOUR progress. Remember, every expert was once a beginner. Keep going! 💪"

// 📌 Hashtags:
// #StayMotivated #CodingJourney #SelfImprovement #GrowthMindset #TechCommunity #NewCoder #TechMotivation

// 5. "What I Wish I Knew When Starting Coding 🎯"
// 🎯 Description:
// "If you're just starting out, here's the advice I wish someone told me: 1️⃣ Focus on one language. 2️⃣ Build small projects early. 3️⃣ Join tech communities for support. 🌟 Stay patient and trust your journey!"

// 📌 Hashtags:
// #CodingAdvice #TechGrowth #BeginnersGuide #SelfTaughtCoder #LearnToCode #DeveloperTips #TechJourney