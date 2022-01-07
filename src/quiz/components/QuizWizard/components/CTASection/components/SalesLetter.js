import seeds from '../../../../../../assets/seeds.jpeg';
import lunch from '../../../../../../assets/lunch.jpeg';
import meditation from '../../../../../../assets/meditation.jpeg';
import juice from '../../../../../../assets/juice.jpeg';
import hairMask from '../../../../../../assets/hairMask.jpeg';
import headMassage from '../../../../../../assets/headMassage.jpeg';
import headMassageMan from '../../../../../../assets/headMassageMan.jpeg';
import downloadButton from '../../../../../../assets/downloadButton.png';

const SalesLetter = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-12 welcome-form">
          <hr id="30-days-hair-plan" />
        </div>
      </div>
      <div  className="row justify-content-center welcome-form">
        <div className="col-md-8 welcome-form">
          <h3>30 Days Hair Routine Plan</h3>
        </div>
      </div>

      <div className="row justify-content-center welcome-form">
        <div className="col-md-8 welcome-form text-left">
          <h4>Internal Routine</h4>
          <hr/>
          <div className="row marginTop15">
            <div className="col-md-6">
              <p><strong>Morning: </strong>Eat a tea spoon mix of Chia seeds, flex seeds and pumpkin seeds and 3 to 4 curry leaves. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className="col-md-6">
                <img src={seeds} style={{width: '100%'}}/>
            </div>
          </div>
          <div className="row marginTop15">
            <div className="col-md-6 order-md-2">
              <p><strong>Afternoon: </strong>Include foods high in protien in your lunch such as a couple of eggs or a bowl of pulse. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className="col-md-6 order-md-1">
                <img src={lunch} style={{width: '100%'}}/>
            </div>
          </div>
          <div className="row marginTop15">
            <div className="col-md-6">
              <p><strong>Evening: </strong>Do Meditation for at least 15 mins. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className="col-md-6">
                <img src={meditation} style={{width: '100%'}}/>
            </div>
          </div>
          <div className="row marginTop15">
            <div className="col-md-6 order-md-2">
              <p><strong>Night: </strong>Drink a table spoon of Amla Juice. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className="col-md-6 order-md-1">
                <img src={juice} style={{width: '100%'}}/>
            </div>
          </div>

        </div>
      </div>

      <div className="row justify-content-center welcome-form">
        <div className="col-md-8 welcome-form text-left">
          <h4>External Routine</h4>
          <hr/>
          <div className="row marginTop15">
            <div className="col-md-6">
              <p><strong>Hair Pack: </strong>Eat a tea spoon mix of Chia seeds, flex seeds and pumpkin seeds and 3 to 4 curry leaves. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className="col-md-6">
                <img src={hairMask} style={{width: '100%'}}/>
            </div>
          </div>
          <div className="row marginTop15">
            <div className="col-md-6 order-md-2">
              <p><strong>Head Massage: </strong>Include foods high in protien in your lunch such as a couple of eggs or a bowl of pulse. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className="col-md-6 order-md-1">
                <img src={headMassage} style={{width: '100%'}}/> <br/><br/>
            </div>
          </div>

        </div>
      </div>

      <div className="row justify-content-center welcome-form">
        <div className="col-md-8 welcome-form">
          <img src={downloadButton} width="270"/>
        </div>
      </div>
    </>
  )
}

export default SalesLetter;
