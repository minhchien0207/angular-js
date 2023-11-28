var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (d, b) {
          d.__proto__ = b;
        }) ||
      function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();

var Hocsinh = /** @class */ (function () {
  function Hocsinh(name, year, userno) {
    this.hoten = name;
    this.namsinh = year;
    this.mahocsinh = userno;
  }
  Hocsinh.prototype.setFavorite = function (fv) {
    this.sothich = fv;
  };
  Hocsinh.prototype.getFavorite = function () {
    return this.sothich;
  };
  return Hocsinh;
})();

var bosung = /** @class */ (function (_super) {
  __extends(bosung, _super);
  function bosung() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  bosung.prototype.setDiem = function (n) {
    this.diemso = n;
  };
  bosung.prototype.getDiem = function () {
    return this.diemso;
  };
  return bosung;
})(Hocsinh);

var teo = new Hocsinh('Nguyễn Văn Tèo', 2000, 'HS0000001');
teo.setFavorite('Xem film');
console.log(teo.getFavorite());
var tun = new bosung('Nguyễn Văn Tũn', 2000, 'HS0000002');
tun.setDiem(10);
console.log(tun.getDiem());
