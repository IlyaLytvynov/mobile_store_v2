import * as React from 'react';
import { Component } from 'react';
import { History } from 'history';
import { observer } from 'mobx-react';

import './login-form.styl';

import { InputComponent } from '../input/Input.component';
import { ButtonComponent } from '../button/button.component';
import { observable } from 'mobx';

interface IProps {
  onSubmit: (userName: string) => void
}

interface IState {
  isValid: boolean;
}

@observer
class LoginFormComponent extends Component<IProps, IState> {
  @observable
  private userName: string = '';

  constructor() {
    super();
    this.state = {
      isValid: true,
    };
  }

  render() {
    const placeholder = 'Log In';
    let classNames = 'login-form';

    if (!this.state.isValid) {
      classNames += ' login-form__not-valid';
    }
    return (
      <div className={classNames}>
        <h1 className='login-form-header'>Please login</h1>
        <div className='input-group'>
          <InputComponent
            onInput={this.onInputChanged.bind(this)}
            onSubmit={this.onFormSubmit.bind(this)}
            value={this.userName}
            placeholder='Name'/>
        </div>
        <div className='input-group'>
          <ButtonComponent
            classNames='danger'
            placeholder={placeholder}
            onClick={this.onFormSubmit.bind(this)}/>
        </div>
      </div>
    );
  }

  private setValidationState(isValid: boolean) {
    this.setState((prevState) => {
      const newState = Object.assign(prevState);
      newState.isValid = isValid;
      return newState;
    });
  }

  private validate() {
    this.setValidationState(!!this.userName.length);
  }

  private onFormSubmit() {
    this.validate();

    if (this.state.isValid) {
      this.props.onSubmit(this.userName);
    }
  }

  private onInputChanged(userName: string) {
    this.userName = userName;
    this.setValidationState(true);
  }
}

export { LoginFormComponent };