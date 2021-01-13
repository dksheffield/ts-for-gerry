import { helper02 } from "../utils/helper02";

// jest -t 'Helper02 returns 7'
test('Helper02 returns 7', () => {
  let resp = helper02(4,3);
  expect(resp).toBe(7)
});