import Hero from "./components/Hero/Hero";
import CardGrid from "./components/CardGrid/CardGrid";
import Card from "./components/Card/Card";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <CardGrid
        label="Selected work"
        title="Visual design"
        >
                <Card
                  href="/about"
                  image="/images/swedish_lifecycle.png"
                  label="Label"
                  title="This is a heading"
                  description="This is the description, keep it short."
                />
        
                <Card
                  href="/about"
                  image="/images/sthlmskallan.png"
                  label="Label"
                  title="This is a heading"
                  description="This is the description, keep it short."
                />
      
                <Card
                  href="/about"
                  image="/images/sthlms_stad.png"
                  label="Label"
                  title="This is a heading"
                  description="This is the description, keep it short."
                />
        
                <Card
                  href="/about"
                  image="/images/fjallsakerhetsradet.png"
                  label="Label"
                  title="This is a heading"
                  description="This is the description, keep it short."
                />
                <Card
                  href="/about"
                  label="Label"
                  title="This is a heading"
                  description="This is the description, keep it short."
                />
        
                <Card
                  href="/about"
                  label="Label"
                  title="This is a heading"
                  description="This is the description, keep it short."
                />
      
                <Card
                  href="/about"
                  label="Label"
                  title="This is a heading"
                  description="This is the description, keep it short."
                />
        
                <Card
                  href="/about"
                  label="Label"
                  title="This is a heading"
                  description="This is the description, keep it short."
                />
      
      </CardGrid>
    </section>
      <section>
        <CardGrid
        label="Selected work"
        title="Frontend projects"
        >
                <Card
                  href="/about"
                  image="/images/news_site.png"
                  label="News site"
                  title="Started with building responsive webpages"
                  description="In this weeks project we learned to create the most common layouts and structures of web pages – such as landing pages and one-pagers."
                />
        
                <Card
                  href="/about"
                  image="/images/business_site.png"
                  label="The business site"
                  title="Forms, Requests and a Touch of JavaScript"
                  description="Learning a bit more about how the internet works and how to use forms to send requests."
                />
        
                <Card          
                  href="/about"
                  image="/images/chat_bot.png"
                  label="Chat bot"
                  title="Getting Started with JavaScript"
                  description="The fundamental syntax and concepts of JavaScript."
                />
        
                <Card
                  href="/about"
                  image="/images/github_tracker.png"
                  label="Github tracker"
                  title="Digging deeper into APIs and unit testing"
                  description="Deepening our API skills and exploring unit testing."
                />
        
                <Card
                  href="/about"
                  image="/images/happy_thoughts.png"
                  label="Happy thoughts"
                  title="A component's life cycle"
                  description="Practicing React state by fetching and posting data to an API."
                />
        
                <Card
                  href="/about"
                  image="/images/quiz.png"
                  label="The quiz"
                  title="Global state with Redux"
                  description="Learning about global state using Redux in a group project."
                />
        
                <Card
                  href="/about"
                  image="/images/todo_app.png"
                  label="Todo app"
                  title="Redux: Reducers and Actions"
                  description="A todo app pulling together all parts of Redux."
                />
        
                <Card 
                  href="/about"
                  image="/images/the_labyrinth.png"
                  label="The labyrinth"
                  title="Redux and APIs"
                  description="A text-based adventure using Redux, thunks, and APIs."
                />
      </CardGrid>
    </section>
    </>
  );
}
