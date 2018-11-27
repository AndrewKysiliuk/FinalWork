export class User {
  constructor(
    public name: string = '',
    public email: string = '',
    public password: string = '',
    public phone: number = null,
    public img: string = '',
    public key: string = ''
  ) {}
}
