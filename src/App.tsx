// React
import { useState } from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// Styles
import styles from "./App.module.css";

// Interfaces
import { ITask } from "./interfaces/ITask";

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);


  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
