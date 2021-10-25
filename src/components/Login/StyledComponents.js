import styled from 'styled-components'

export const MobileLoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const LoginPageImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`
export const LoginHeading = styled.h1`
  color: #0f172a;
  align-self: flex-end;
  font-size: 28px;
  line-height: 32px;
  margin-left: 25px;
  @media screen and (min-width: 767px) {
    align-self: center;
    line-height: 96%;
  }
`

export const LoginHeadingAndImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  padding: 25px;
`
export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const InputLabel = styled.label`
  color: #475569;
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  margin-left: 0px;
`
export const InputField = styled.input`
  background-color: #e2e8f0;
  height: 50px;
  border: #e2e8f0 1px solid;
  margin-top: 15px;
  border-radius: 2px;
  margin-bottom: 10px;
`
export const LoginButton = styled.button`
  height: 50px;
  background-color: #f7931e;
  width: 100%;
  font-family: 'DM Sans';
  color: #ffffff;
  font-size: 18px;
  border-radius: 8px;
  margin-top: 20px;
  border: none;
`
export const ErrorMessage = styled.p`
  color: #ef4444;
  font-family: 'DM Sans';
  font-size: 12px;
  font-weight: 700;
  width: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (min-width: 767px) {
    font-size: 14px;
  }
`
export const DesktopLoginFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const DesktopFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px 5px rgba(7, 7, 7, 0.08);
  margin-top: 150px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 456px;
  height: 523px;
  padding: 35px;
  margin-left: 100px;
  margin-right: 50px;
`
export const HatIcon = styled.img`
  height: 43px;
  width: 53px;
`
export const DesktopAppHeading = styled.h1`
  font-family: 'DM Sans';
  font-size: 24px;
  line-height: 32px;
  color: #f7931e;
  font-style: italic;
`
export const DesktopLoginImageContainer = styled.div`
  // background-image: url('https://res.cloudinary.com/joker3748/image/upload/v1633447138/TastyKitchen/Rectangle_1456_rswv21.png');
  width: 705px;
  height: 1024px;
`
export const DesktopLoginImage = styled.img`
  margin-left: 10px;
`
export const MobileLoginImage = styled.img`
  /* @media screen and (min-width: 400px) and (max-width: 576px) {
    margin-left: 56px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    margin-left: 96px;
  } */
`
