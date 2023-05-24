export interface IBlueButton {
  title: 'Next' | 'Log in' | 'Tweet' | 'Send';
  type?: 'submit';
  isDisabled: boolean;
  id?: 'recaptcha-btn';
  callback?: () => void;
}
