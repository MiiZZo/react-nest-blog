import React, { useState } from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { cn } from '@bem-react/classname';
import SignInForm from '../../molecules/auth/SignIn/SignInForm';
import SignUpForm from '../../molecules/auth/SignUp/SignUpForm';
import './Auth.scss';

const cnAuthOrganism = cn('AuthOrganism');

export default function Auth(): JSX.Element {
    const [selectForm, setSelectForm] = useState<'SignIn' | 'SignUp'>('SignIn');
    const handleChangeSelectForm = (e: RadioChangeEvent) => {
        setSelectForm(e.target.value);
    }

    return (
        <>
            <Radio.Group
                value={selectForm}
                onChange={handleChangeSelectForm} 
                className={cnAuthOrganism('SelectButtonsWrapper')}
            >
                <Radio.Button className={cnAuthOrganism('RadioButton')} value="SignIn">Вход</Radio.Button>
                <Radio.Button className={cnAuthOrganism('RadioButton')} value="SignUp">Регистрация</Radio.Button>
            </Radio.Group>
            { selectForm === 'SignUp' ? [<SignUpForm key={100}/>] : [<SignInForm key={200}/>] }
        </>
    )
}
