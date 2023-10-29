import Form from 'react-bootstrap/Form';
import { styled } from 'styled-components';

interface InputProps {
    className?: string
    label: string
    type: string
    value?: string | number
    onChange: (newValue: string) => void;
}
function Input(props: InputProps) {

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value);
    };


    return (
        <Form>
            <Form.Group className={props.className} controlId="exampleForm.ControlInput1">
                <Form.Label className='label-style' size='sm'>{props.label}</Form.Label>
                <Form.Control className='input-width' type={props.type} size='sm' value={props.value} onChange={handleChangeValue} />
            </Form.Group>
        </Form>
    );
}

export default styled(Input)`
display: flex;
gap:1rem;

.label-style{
    flex: 1;
}
.input-width{
    max-width: 300px;
}

`;