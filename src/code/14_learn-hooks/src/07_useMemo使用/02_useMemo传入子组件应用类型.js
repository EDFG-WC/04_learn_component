import React, { memo, useMemo, useState } from 'react';

const HYInfo = memo((props) => {
  console.log('HYInfo重新渲染');
  return (
    <h2>
      名字: {props.info.name} 年龄: {props.info.age}
    </h2>
  );
});

export default function MemoHookDemo02() {
  console.log('MemoHookDemo02重新渲染');
  const [show, setShow] = useState(true);
  // 这个局部变量, 对于自组件来说永远都是新对象(地址不同了)
  // const info = { name: "why", age: 18 };
  const info = useMemo(() => {
    return { name: 'why', age: 18 };
  }, []); // 这样写代表任何值都不会让自组件重新渲染.

  return (
    <div>
      <HYInfo info={info} />
      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  );
}
