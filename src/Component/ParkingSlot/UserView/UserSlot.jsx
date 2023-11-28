import './UserSlot.css'

export default function UserSlot () {
  return (
    <div className='usercard'>
      <div id='card'>
        <h1>Residente</h1>
      </div>
      <div className='right-container'>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Runs</th>
              <th>Centuries</th>
              <th>Strike Rate</th>
              <th>Avg</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Rohit</td>
              <td>10000</td>
              <td>29</td>
              <td>97</td>
              <td>55</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Virat</td>
              <td>12000</td>
              <td>40</td>
              <td>91</td>
              <td>49</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Rahul</td>
              <td>5000</td>
              <td>8</td>
              <td>85</td>
              <td>45</td>
            </tr>

            <tr>
              <td>4</td>
              <td>Rishabh</td>
              <td>4000</td>
              <td>2</td>
              <td>89</td>
              <td>39</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
