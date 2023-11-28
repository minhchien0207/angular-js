class Hocsinh {
  public hoten: string;
  public namsinh: number;
  public mahocsinh: string;
  private sothich: string;

  constructor(name: string, year: number, userno: string) {
    this.hoten = name;
    this.namsinh = year;
    this.mahocsinh = userno;
  }

  setFavorite(fv: string) {
    this.sothich = fv;
  }

  getFavorite() {
    return this.sothich;
  }
}

class bosung extends Hocsinh {
  private diemso: number;

  setDiem(n: number) {
    this.diemso = n;
  }

  getDiem() {
    return this.diemso;
  }
}

const teo: Hocsinh = new Hocsinh('Nguyễn Văn Tèo', 2000, 'HS0000001');
teo.setFavorite('Xem film');
console.log(teo.getFavorite());
const tun: bosung = new bosung('Nguyễn Văn Tũn', 2000, 'HS0000002');
tun.setDiem(10);
console.log(tun.getDiem());
