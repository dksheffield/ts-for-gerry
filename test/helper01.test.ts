import { helper01 } from "../utils/helper01";

// jest -t 'Helper01 returns you ran helper 01'
test('Helper01 returns you ran helper 01', () => {
  let resp = helper01();
  expect(resp).toBe('you ran helper 01')
});