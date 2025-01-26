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

// ### 1. **"Struggling in Tech? Here’s the Secret No One Tells You 🤫💻"**  
// **Description:**  
// Struggling in your coding journey? You’re not alone! Every error, every bug, every frustration—it’s all part of the process. The secret to success isn’t avoiding the struggle; it’s pushing through it. Growth comes from challenges, so don’t stop now. You’ve got this! 🚀💪  

// **Hashtags:**  
// #CodingJourney #TechStruggles #ProgrammerLife #NeverGiveUp #CodeMotivation #TechTips #LearnToCode #DevLife #PerspicaciousDev #HubPostCommunity #TechNigeria  

// ---

// ### 2. **"I Failed a Million Times… And That’s Why I’m Winning in Coding 🏆👨‍💻"**  
// **Description:**  
// Failure isn’t the end—it’s the beginning of growth. Every error I’ve made has taught me something new and brought me closer to success. Don’t fear failure; embrace it. Break it. Fix it. Repeat. That’s how greatness is built! 💻🔥  

// **Hashtags:**  
// #CodeFails #ProgrammerMindset #FromFailureToSuccess #CodingMotivation #TechGrowth #DevInspiration #SelfTaughtDeveloper #HubPostCommunity #TechWithJohn #TechNigeria  

// ---

// ### 3. **"From Zero to Hero: How Beginners Succeed in Tech 🚀✨"**  
// **Description:**  
// Every expert was once a beginner. The key to growth in tech? Start small and stay consistent. Every single line of code you write brings you closer to your goals. Don’t wait for the perfect moment—start now and aim BIG! 🌟💡  

// **Hashtags:**  
// #BeginnerCoder #LearnTech #ConsistencyIsKey #TechMotivation #DevLife #CodeEveryday #HubPostCommunity #PerspicaciousDev #TechInAfrica #NeverStopLearning  

// ---

// ### 4. **"Stop Learning Everything! Focus on This ONE Skill 👀🔥"**  
// **Description:**  
// You don’t need to master everything to succeed in tech. Focus on one skill—frontend, backend, or data science. Specialize, grow, and let your expertise open doors for you. Depth beats breadth every time. 🎯🚀  

// **Hashtags:**  
// #FocusOnOne #CodingSkills #TechSpecialist #CodeWisdom #DevTips #ProgrammerLife #HubPostCommunity #PerspicaciousDev #TechGoals #TechCareer  

// ---

// ### 5. **"Why Your First 100 Bugs Are Your Greatest Teachers 🐞💡"**  
// **Description:**  
// Bugs are not your enemies—they’re your greatest teachers. Those first 100 bugs? They’ll frustrate you but also teach you resilience, problem-solving, and growth. Embrace them, debug them, and watch yourself evolve. 💻✨  

// **Hashtags:**  
// #DebuggingSkills #CodingLessons #TechGrowth #ProgrammerJourney #NeverStopLearning #DevLifeHacks #HubPostCommunity #PerspicaciousDev #TechTips  

// ---

// ### 6. **"The TRUTH About Coding Nobody Talks About 🤯💻"**  
// **Description:**  
// Coding is not about being the smartest person in the room; it’s about persistence. It’s about Googling, debugging, and being curious. Stay consistent, keep learning, and remember: Progress beats perfection every time! 🚀🔥  

// **Hashtags:**  
// #CodeTruth #DevJourney #ProgrammerMindset #CodingReality #StayCurious #HubPostCommunity #PerspicaciousDev #TechMotivation #TechLife  

// ---

// ### 7. **"You Don’t Need to Be a Genius to Succeed in Tech 🧠❤️"**  
// **Description:**  
// Tech is not about genius—it’s about passion and grit. If you’re consistent and willing to learn, you’ll succeed. Talent is great, but hard work is what changes the game. Keep pushing! You’re closer than you think. 💡💻  

// **Hashtags:**  
// #HardWorkBeatsTalent #TechSuccess #DevInspiration #CodingLife #TechMotivation #HubPostCommunity #PerspicaciousDev #KeepCoding  

// ---

// ### 8. **"Every Pro Coder Was Once a Beginner—Your Turn! 🚀👨‍💻"**  
// **Description:**  
// Every professional coder you look up to started from scratch. They faced challenges, made mistakes, and kept learning. Now it’s your turn. Keep going, and one day you’ll inspire others. Your journey matters! 💻🔥  

// **Hashtags:**  
// #FromZeroToHero #BeginnerCoder #KeepLearning #CodeWithJohn #HubPostCommunity #PerspicaciousDev #TechMotivation #TechJourney  

// ---

// ### 9. **"The Most Underrated Tip to Stay Motivated in Tech 💪✨"**  
// **Description:**  
// Celebrate your small wins! Solved a bug? Pat yourself on the back. Finished a project? Share it. Progress is motivation, and every step forward is worth celebrating. Keep shining! 🎉💻  

// **Hashtags:**  
// #CelebrateWins #DevMotivation #CodeLife #SmallStepsBigImpact #TechWithJohn #PerspicaciousDev #HubPostCommunity #TechJourney  

// ---

// ### 10. **"Why Consistency Will Always Beat Talent in Programming 🕒🔥"**  
// **Description:**  
// Talent is great, but consistency is what truly wins. Show up every day, write code, and keep learning. Those who succeed aren’t always the most talented—they’re the ones who never stop. Stay consistent. 💻💪  

// **Hashtags:**  
// #ConsistencyIsKey #DevJourney #CodeMotivation #KeepPushing #HubPostCommunity #PerspicaciousDev #TechLife #NeverGiveUp  

// ---

// Let me know if you need tweaks or additional edits! 🚀

// Alright, let’s craft some **power-packed 15-second scripts** that hit hard and align perfectly with your style. Short, impactful, and motivational!  

// ---

// ### 1. **"Struggling in Tech? Here’s the Secret No One Tells You 🤫💻"**  
// *"If you're struggling in tech, here’s the truth: EVERYONE struggles! But the secret? Don’t quit. Every bug you fix, every error you debug—it’s all building your future. Struggle means growth. Keep going—you’re closer than you think. 💪🔥"*

// ---

// ### 2. **"I Failed a Million Times… And That’s Why I’m Winning in Coding 🏆👨‍💻"**  
// *"I’ve failed more times than I can count. Guess what? That’s why I’m here today. Failures in coding aren’t the end—they’re the lessons. Break it. Fix it. Repeat. That’s how winners are made! 🚀💻"*

// ---

// ### 3. **"From Zero to Hero: How Beginners Succeed in Tech 🚀✨"**  
// *"Everyone starts at zero. No skills. No knowledge. But here’s the truth: Consistency beats everything. Write one line of code every day, and one day, you’ll look back and see how far you’ve come. Start small, aim BIG! 💡🔥"*

// ---

// ### 4. **"Stop Learning Everything! Focus on This ONE Skill 👀🔥"**  
// *"You don’t need to learn it all. Focus on one skill—frontend, backend, data science, anything. Master that, and opportunities will find YOU. Stop chasing everything; focus sharp, grow fast! 🎯✨"*

// ---

// ### 5. **"Why Your First 100 Bugs Are Your Greatest Teachers 🐞💡"**  
// *"Your first 100 bugs will frustrate you, but they’ll also teach you the most. Every bug is a lesson. Embrace them—they’ll shape you into a developer who can solve ANYTHING. Debugging = growth! 🔥💻"*

// ---

// ### 6. **"The TRUTH About Coding Nobody Talks About 🤯💻"**  
// *"Here’s the truth about coding: It’s NOT about being the smartest. It’s about persistence. Googling, debugging, asking questions—that’s what makes great coders. Stay curious, and never stop learning! 🚀✨"*

// ---

// ### 7. **"You Don’t Need to Be a Genius to Succeed in Tech 🧠❤️"**  
// *"Tech isn’t about being a genius. It’s about having passion and grit. If you can stay consistent and keep learning, you’ll succeed. Talent is optional; hard work is non-negotiable. Keep pushing! 💻🔥"*

// ---

// ### 8. **"Every Pro Coder Was Once a Beginner—Your Turn! 🚀👨‍💻"**  
// *"Every pro coder you admire started exactly where you are: confused, frustrated, and learning. Don’t rush the process. Stay consistent, and soon, YOU will inspire others. Your journey is worth it! ✨🔥"*

// ---

// ### 9. **"The Most Underrated Tip to Stay Motivated in Tech 💪✨"**  
// *"Want to stay motivated? Celebrate your small wins. Solved a bug? Pat yourself on the back. Finished a project? Share it. Motivation grows when you acknowledge your progress. Keep celebrating YOU! 🎉💻"*

// ---

// ### 10. **"Why Consistency Will Always Beat Talent in Programming 🕒🔥"**  
// *"Talent is great, but consistency is UNSTOPPABLE. Show up every day, write code, and improve. The ones who succeed are the ones who never stop. Keep showing up—it’s YOUR time! 💪🚀"*

// ---

// What do you think? Each one delivers value, is engaging, and fits that 15-second mark perfectly. Let me know which one to refine further or if we should get rolling! 💻🔥