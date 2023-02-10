export const EMAIL_REG_EXP = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
export const STRONG_PASSWORD_REG_EXP = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/
export const MEDIUM_PASSWORD_REG_EXP = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))/
export const PHONE_REG_EXP = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
export const BENCH_FILTER = 'BEN'
