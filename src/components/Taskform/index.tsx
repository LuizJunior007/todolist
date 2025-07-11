import { Button, Col, FormControl, FormLabel, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTasks, type Task } from "../../context/TaskContext";
import { useToast } from "../../context/ToastContext";

const Taskform = () => {

    const { addTask } = useTasks();
    const { toast, showToast } = useToast();

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Task>();
    const errorsMsg = {
        required: 'Preencha este campo',
        min: 'Mínimo 3 caracteres'
    }

    const handleAddTask = (data : Task) => {

        toast.msg = 'Adicionado com sucesso';
        toast.show = true;
        toast.status = 'success';

        addTask(data);
        reset();
        showToast(toast);
    }

    return(
        <form onSubmit={ handleSubmit(handleAddTask) }>
            <Row>
                <Col sm="6" md="4">
                <FormLabel htmlFor="title">Título</FormLabel>
                    <FormControl type="text" id="title" autoComplete="off" className={`${errors.title && 'is-invalid'}`} placeholder="Ex: Estudar" { ...register('title', { required: errorsMsg.required, min: errorsMsg.min }) } />
                    {errors.title?.message && (
                        <small className="text-danger">{ String(errors.title.message) }</small>
                    )}
                </Col>

                <Col sm="6" md="4" className="mt-3 mt-sm-0">
                    <FormLabel htmlFor="description">Descrição</FormLabel>
                    <FormControl type="text" id="description" autoComplete="off" className={`${errors.description && 'is-invalid'}`} placeholder="Ex: Estudar matemática" { ...register('description', { required: errorsMsg.required, min: errorsMsg.min }) } />
                    {errors.description?.message && (
                        <small className="text-danger">{ String(errors.description.message) }</small>
                    )}
                </Col>

                <Col sm="6" md="4" className="mt-3 mt-md-0">
                    <FormLabel htmlFor="date">Data de início</FormLabel>
                    <div className="input-group">
                        <FormControl type="date" className={`${errors.date && 'is-invalid'}`} id="date" { ...register('date', { required: errorsMsg.required }) } />
                        <Button type="submit">
                            <i className="bi bi-plus-lg"></i>
                        </Button>
                    </div>
                    {errors.date?.message && (
                        <small className="text-danger">{ String(errors.date.message) }</small>
                    )}
                </Col>
            </Row>
        </form>
    );

}

export default Taskform;