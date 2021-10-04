import {Component} from 'react';
import {Button, Card, Modal} from 'react-bootstrap';

class BeastModal extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Body>
          <Card>
            <Card.Img
              src={this.props.selectedBeast.image_url}
              alt={this.props.selectedBeast.title}
            />
            <Card.Title>{this.props.selectedBeast.title}</Card.Title>
            <Card.Text>{this.props.selectedBeast.description}</Card.Text>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BeastModal;

