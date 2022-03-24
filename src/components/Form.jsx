import {useEffect, useState} from 'react';
import {useInput} from '../hooks/useInput';
import {Input} from './Input';
import {Radio} from './Radio';



function Form() {
    const firstName = useInput('', { minLength: 2, isEmpty: true})
    const lastName = useInput('', {minLength: 2, isEmpty: true})
    const email = useInput('', {isEmailError: false, isEmpty: true});
    const telNumber = useInput('', {telNumberError: false, isEmpty: true})
    const gender = useInput('М', {});
    const [subscription, setSubscription] = useState(false);
    const bornDate = useInput('YYYY-MM-DD', {});
    const middleName = useInput('', {});
    const [isSendRequest, setIsSendRequest] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const subscriptionHandler = (e) => {
        const value = e.target.checked;

        setSubscription(value);
    }

    const resetInputs = () => {
        firstName.setValue('');
        lastName.setValue('');
        email.setValue('');
        telNumber.setValue('');
        bornDate.setValue('YYYY-MM-DD');
        middleName.setValue('');
        setSubscription(false);
        gender.setValue('М');
        firstName.setIsDirty(false);
        lastName.setIsDirty(false);
        email.setIsDirty(false);
        telNumber.setIsDirty(false);
        setFormValid(false);
    }

    const sendRequest = () => {
        const obj = {
            firstName: firstName.value,
            lastName: lastName.value,
            middleName: middleName.value,
            email: email.value,
            telNumber: telNumber.value,
            bornDate: bornDate.value,
            gender: gender.value,
            subscription
        }

        const objJSON = JSON.stringify(obj);
        console.log(objJSON);
        setIsSendRequest(true);

        resetInputs();
    }

    useEffect(() => {
        if (!firstName.error && !lastName.error && !email.error && !telNumber.error) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }, [firstName.error, lastName.error, email.error, telNumber.error])

    return <form className="form">
        <h1>Ваша заявка</h1>
        <div className="inputs">
            <Input
            input={firstName}
            inputPlaceholder='Имя'
            inputType='text'
            inputName='firstName'></Input>
            <Input
            input={lastName}
            inputPlaceholder='Фамилия'
            inputType='text'
            inputName='lastName'></Input>
            <Input
            input={middleName}
            inputPlaceholder='Отчество'
            inputType='text'
            inputName='middleName'></Input>
        </div>
        <div className="inputs">
            <Input
            input={email}
            inputPlaceholder='Почта'
            inputType='email'
            inputName='email'></Input>
            <Input
            input={telNumber}
            inputPlaceholder='Номер телефона'
            inputType='tel'
            inputName='telNumber'></Input>
        </div>
        <div className="inputs inputs_born">
            <div className="form-group">
                <input
                type="date"
                id="start"
                className='input'
                name="trip-start"
                value={bornDate.value}
                onChange={bornDate.handleChange}
                min="1900-01-01"
                max="2022-12-31"></input>
            </div>
            <Radio 
            input={gender}
            inputType='radio'
            inputName='gender'></Radio>
            
        </div>
        
        <div className="form-group">
            <label htmlFor="">
                <input type="checkbox" checked={subscription} onChange={subscriptionHandler}/>
                Не отправлять СМС
            </label>
        </div>
        
        
        <div className={isSendRequest ? 'notification notification_active' : 'notification'}>
            <label htmlFor="">Ваша заявка отправлена!</label>
        </div>
        <button disabled={!formValid} onClick={() => sendRequest()}>Отправить заявку</button>
    </form>
}

export {Form};