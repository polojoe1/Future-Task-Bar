import Hi from './assets/hi.jpeg';
import TaskBar from './components/TaskBar';

function App() {
  return (
    <div className="">
      <img src={Hi} className='h-screen absolute z-[-1] w-screen' alt="hi" />
      <TaskBar/>
    </div>
  );
}

export default App;
