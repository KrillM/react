import { useForm } from "react-hook-form";

export default function Crew(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onValid = (data) => {
        console.log("성공 ", data);
    }
    const onInvalid = (err) => {
        console.log("실패 ",err);
    }

    return(<>
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input type="text" placeholder="name" {...register("name", {
                required: '이름은 필수로 입력해야 합니다.',
                minLength: {value: 2, message: "이름은 두 글자 이상 입력해야 합니다"},
                maxLength: {value: 20, message: "이름은 스무 글자 이하로 입력해야 합니다"},   
            })}/>
            {errors.name?.message}<br/>

            <input type="number" placeholder="age" {...register("age", {
                required: '나이는 필수로 입력해야 합니다.',
                validate: {
                    positiveInteger: value => Number.isInteger(Number(value)) && Number(value) > 0 || '나이를 올바르게 입력하세요.',
                    maxAge: value => Number(value) <= 120 || '19세기 사람이니?',
                }
            })}/>
            {errors.age?.message}<br/>

            <button type="submit">회원가입</button>
        </form>

    </>);   
}