#### useEffect() will be called every time the component(inside which we use useEfffect) is rendered. But since there is a dependancy array(which is not mandatory) in the parameter of useEffect(), so it changes the behavior of it's render.

If no dependancy array => useEffect is called on every component render.

If dependancy array is empty eg;[] => useeffect is called on initial render and just once.

If dependancy array is not empty eg;[btnNameReact] => useeffect is called every time btnNameReact is updated.

#### Never create useState() outside of the component.

Why is throws an error? Beacuse the purpose of useState() is to create Local State Variables inside the functional component.

Always create useState() on the top!

Never create useState() inside a if-else/function! 




