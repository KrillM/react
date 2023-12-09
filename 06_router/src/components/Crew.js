import { useForm } from "react-hook-form";

export default function Crew(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    // register("ID") => { name: id }

    const onValid = (data) => {
        console.log("성공 ", data);
    }

    const onInvalid = (err) => {
        console.log("실패 ",err);
    }

    const registGender = register("gender", {required: ' 성별은 필수로 입력해야 합니다.'})

    // console.log(watch("mail"));///

    return(<>
        <h4>React Hook Form Test</h4>

        {/* handleSubmit(onValid[onInvalid]) */}
        {/* onValid: form을 정상적으로 제출할 수 있는 상태일 때 실행할 함수이다. */}
        {/* onInvalid: 선택된 form을 정상적으로 제출할 수 없을 때 실행할 함수이다. */}
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input type="text" placeholder="ID" {...register("ID", {required: '아이디는 필수로 입력해야 합니다.'})}/>
            {errors.ID?.message}<br/>

            <input type="text" placeholder="name" {...register("name", {
                required: '이름은 필수로 입력해야 합니다.',
                minLength: {value: 2, message: "이름은 두 글자 이상 입력해야 합니다"},
                maxLength: {value: 20, message: "이름은 스무 글자 이하로 입력해야 합니다"},   
            })}/>
            {errors.name?.message}<br/>

            <input type="text" placeholder="mail" {...register("mail", {
                required: '이메일은 필수로 입력해야 합니다.',
                pattern: {
                    value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                    message: "올바른 이메일 형식을 입력하세요."
                }
                // validate: (v)=> v.includes("gmail.com") || "구글 아님 꺼져",
            })}/>
            {errors.mail?.message}<br/>

            <label htmlFor="gender-man">
                남<input type="radio" name="gender" value="남" id="gender-man" {...registGender}/>
            </label>
            <label htmlFor="gender-woman">
                여<input type="radio" name="gender" value="여" id="gender-woman" {...registGender}/>
            </label>
            <label htmlFor="gender-third">
                설마?<input type="radio" name="gender" value="제3의 성" id="gender-third" {...registGender}/>
            </label>
            {errors.gender?.message}<br/>

            <select {...register("option", {required: "옵션은 필수입니다"})}>
                <option value="">옵션</option>
                <option value="미국">미국</option>
                <option value="유럽">유럽</option>
                <option value="러시아">러시아</option>
                <option value="중국">중국</option>
            </select>
            {errors.option?.message}<br/>

            <button type="submit">회원가입</button>
        </form>
    </>);   
}