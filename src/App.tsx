import Layout from './components/Layout'
import './App.css'

const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu augue augue. Nam fermentum malesuada augue. Morbi dapibus, nulla quis faucibus sodales, tellus urna molestie nisl, ornare egestas nisl justo a felis. Quisque ante turpis, dictum cursus mi ut, faucibus pretium augue. Suspendisse potenti. Duis consequat quam et arcu dapibus, sit amet egestas leo pretium. Aenean ut tortor in quam aliquam euismod a eu dui. Nunc pharetra euismod arcu, a placerat turpis pellentesque sit amet. Pellentesque at turpis in arcu porta scelerisque. Phasellus a sodales dui, ac congue lorem.

Nam mattis semper lorem, at lacinia mi ultricies at. Sed porta quam vel egestas mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi tempus nibh et magna malesuada, a lobortis sem placerat. In egestas venenatis vehicula. Quisque vehicula congue interdum. Etiam urna velit, condimentum in molestie at, fringilla sit amet purus. Proin accumsan quis sapien ac volutpat. In finibus laoreet tellus, sed pharetra nisl hendrerit id.

Duis finibus felis at nisi pellentesque mattis suscipit vel neque. Morbi imperdiet ornare augue id aliquet. Nam eu nulla velit. Duis pellentesque, metus non volutpat laoreet, neque nulla porttitor velit, sit amet condimentum enim mi vel turpis. Nunc vel mi eu massa pellentesque fringilla id a massa. Vestibulum bibendum viverra fringilla. Nulla ut nulla in diam luctus laoreet. Vivamus porttitor sollicitudin massa a suscipit.

Maecenas tincidunt dolor eget sagittis viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus non sollicitudin elit. Proin lacus dolor, hendrerit vel dolor molestie, volutpat dignissim nisl. Quisque condimentum lorem id nunc sodales, et mollis felis feugiat. Curabitur sollicitudin magna dignissim leo consectetur cursus. Vivamus ac rutrum elit. Pellentesque sollicitudin rutrum odio sit amet maximus. Cras gravida volutpat est, sed fringilla arcu placerat eu. Fusce id ipsum sed tortor ornare viverra. Etiam vitae finibus orci, at iaculis eros. Aenean blandit nisl in tempor faucibus. Sed mattis sodales enim, dignissim condimentum risus sagittis id. Nulla in elit non augue eleifend tempus quis eu ante.

Suspendisse viverra eu magna sit amet volutpat. Mauris placerat in sem ac elementum. Morbi at augue tortor. Quisque finibus odio sed tortor maximus rutrum et vel justo. Morbi eu maximus odio. Pellentesque posuere tempor justo id blandit. Vivamus quis felis in ante pharetra egestas quis ut urna. Donec nulla est, sodales sit amet pretium ut, egestas et lorem. Fusce posuere non ex id vehicula. Vestibulum diam nulla, commodo vitae risus vitae, posuere ullamcorper risus. Maecenas a euismod ante. Quisque suscipit ipsum sed malesuada egestas. Nulla fringilla malesuada augue non malesuada. Fusce mattis hendrerit turpis vel dapibus.
`

function App() {

  return (
    <Layout>{lorem}</Layout>
  )
}

export default App
