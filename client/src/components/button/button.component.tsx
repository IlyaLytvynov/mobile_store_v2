import * as React from "react";
import { Component, SyntheticEvent, MouseEvent } from 'react';

import './button.styl';

export interface IInputComponentProps {
  placeholder: string;
  onClick: () => void;
  classNames?: string;
}

interface IRippleStyles {
  width: number;
  height: number;
  top: string;
  left: string;
}

interface IState {
  rippleStyles: IRippleStyles|undefined;
  animated: boolean;
}

export class ButtonComponent extends Component<IInputComponentProps, IState> {

  private _ripple: HTMLSpanElement | null;
  private _btnElement: HTMLDivElement | null;
  private _timeOut: number = 0;
  private _DURATION = 400;// MS
  constructor() {
    super();
    this.state = {
      rippleStyles: undefined,
      animated: false
    }
  }

  private animate(e: MouseEvent<HTMLElement>) {
    const nativeEvent = e.nativeEvent;
    const posX = nativeEvent.offsetX;
    const posY = nativeEvent.offsetY;

    let width= this._btnElement!.offsetWidth / 10;

    let height= this._btnElement!.offsetHeight / 10;

    if (width >= height) {
      height = width;
    } else {
      width = height;
    }

    this.setState((prevState: IState) => {
      const newState = Object.assign((prevState));

      newState.rippleStyles =  {
        display: 'block',
        width,
        height,
        top: posY + 'px',
        left: posX + 'px',
        opacity: 1,
        animationDuration: `${this._DURATION + 100}ms`
      };
      newState.animated = true;
      return newState;
    });

    this._timeOut = window.setTimeout(() => {
      this.setState((prevState: IState) => {
        const newState = Object.assign((prevState));

        newState.rippleStyles = undefined;
        newState.animated = false;
        return newState;
      });
    }, this._DURATION);
  }

  onClickHandler(e: MouseEvent<HTMLElement>) {
   this.animate(e);
   setTimeout(() => {
     this.props.onClick();
   }, this._DURATION);
  }

  render() {
    let classNames = 'button ';
    let rippleClasses = 'ripple';

    if (this.props.classNames) {
      classNames = classNames + this.props.classNames;
    }

    if(this.state.animated) {
      rippleClasses += ' rippleEffect';
    }

    return (
      <div className={classNames}
           onClick={this.onClickHandler.bind(this)}
           ref={(node) => this._btnElement = node}>
        <span className="text">{this.props.placeholder}</span>
        <span className={rippleClasses} ref={(node) => this._ripple = node} style={this.state.rippleStyles}> </span>
      </div>
    )
  }
}


