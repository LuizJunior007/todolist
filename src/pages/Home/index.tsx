import { appName } from "../../config";
import Taskform from "../../components/Taskform";

const Home = () => {

    document.title = 'Home | ' + appName;

    return(
        <section>
            <h1 className="fs-4">
                Olá, seja bem vindo! Inicie uma nova tarefa logo abaixo.
            </h1>

            <div className="mt-5">
                <Taskform />
            </div>
        </section>
    );

}

export default Home;