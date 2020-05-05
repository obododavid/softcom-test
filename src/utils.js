export const handleCheckEmailValidity = value => new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value);
export const handleCheckPasswordValidity = value => new RegExp(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/).test(value);
