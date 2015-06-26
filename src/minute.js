import interval from "./interval";

export function floor(date) {
  date.setSeconds(0, 0);
};

export default interval(floor, function(date, offset) {
  date.setTime(+date + offset * 6e4);
});
