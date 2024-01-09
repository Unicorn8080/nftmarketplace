const RoundEffect = (props) => {
  const {className} = props;
  return (
    <div calssName={`w-[857px] h-[857px]`}>
      <div className={`${className} w-[857px] h-[857px] rounded-[428.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(109,94,234,0.3)_0%,rgba(0,0,0,0)_100%)]`} />
    </div>
  )
}

export default RoundEffect;