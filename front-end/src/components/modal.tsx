import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { UserContext } from '../context/dataProvider';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:250,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent:"space-between",
};

const BasModal = () => {

  const {open, setOpen} = React.useContext(UserContext)
  const [sign, setSign] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const signFunc = () => {
    setSign(true)
  }
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!sign ? <TextField value={email} onChange={(e) => setEmail(e.target.value)} label={'email Addres'}/> : <TextField value={email} onChange={(e) => setEmail(e.target.value)} label={"create email"}/>}
          {!sign ? <TextField value={password} onChange={(e) => setPassword(e.target.value)} label={"password"}/> : <TextField value={password} onChange={(e) => setPassword(e.target.value)} label={"create password"}/>}
          {!sign ? <Button onClick={signFunc}>Login</Button> : <Button>Sign Up</Button>}
          <p onClick={signFunc}>create account</p>
        </Box>

      </Modal>
    </div>
  );
}
export default BasModal;
