import "./App.css";
import InfoPanel from "./components/InfoPanel";
import FactPanel from "./components/FactPanel";
import Frame from "./components/wrappers/Frame";
import ToDoList from "./components/ToDoList";

function App() {
  // const currentDate = new Date();
  // console.log(currentDate, currentDate.getDay(),currentDate.getMonth(),currentDate.getFullYear());

  //clear() -> Clear storage/ remove(<key>) -> remove key-value pair

  //TODO-----------

  // 2. Each  task can have a different label
  // 3. Group tasks by labels
  // 4. Add different labels with different color options (6 color options)
  // 5. Historically view items
  // 6. Create a favorites list of items that can be quickly added (e.g. 2h 30m Endurance Run with "Aerobic training" label)
  // 9. Scrape some insights from James Clear's weekly mails
  // 10. Format different letters based on the current date
  // 11. Good morning/evening/afternoon based on current time in a bubble
  // 12. Implement a separate page where you can check completed tasks hystorically
  // 13. custom hook that fetches and returns an array with 3 quotes/facts

  //IN PROGRESS----
  // 1. Add tasks into a list
  // 2. Connect to MongoDB
  // 3. Upload plus fetch tasks from MongoDB

  //TESTING--------
  // Screenshots in FB CHAT
  // Display a new inspirational quote every day
  // Display a new random fun fact every day
  //DONE-----------
  return (
    <>
      <Frame>
        <InfoPanel />
        <FactPanel />
      </Frame>
      <Frame>
        <ToDoList />
      </Frame>
    </>
  );
}

export default App;
