import {useState} from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Flex, Box, Stack, VStack, HStack } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import axios from 'axios';

function Forms(){
  const [numId, setNumId] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [numRegistre, setNumRegistre] = useState('');
  const [prenomPere, setPrenomPere] = useState('');
  const [prenomMere, setPrenomMere] = useState('');
  const [nomMere, setNomMere] = useState('');
  const [error, setError] = useState('');
    
   
    const [currentStep, setCurrentStep] = useState(1);


    const handleNext = () => {
      setCurrentStep(currentStep + 1);
    };
  
    const handlePrev = () => {
      setCurrentStep(currentStep - 1);
    };
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await axios.post('/api/save-data/', {
        numId,
        nom,
        prenom,
        email,
        numRegistre,
        prenomPere,
        prenomMere,
        nomMere,
      });
     if (response.data.success) {
        // Données enregistrées avec succès
        setNumId('');
        setNom('');
        setPrenom('');
        setEmail('');
        setNumRegistre('');
        setPrenomPere('');
        setPrenomMere('');
        setNomMere('');
      } else {
        setError('Erreur lors de l\'enregistrement des données');
      }
    } catch (error) {
      setError('Une erreur est survenue');
    }
  };

    return(
        <form onSubmit={handleSubmit}>
         <Box mt="20px" height="150px" color="white" width="100%">
            <Stack
              spacing={0.1}
              className="text"
              fontWeight="bold"
              textShadow="1px 1px #000000, -1px -1px #ffffff"
            >
              <Text fontSize="xl">Votre espace etat civil</Text>
              <Text fontSize="xl">electronique. Delivrer des papiers</Text>
              <Text fontSize="xl" borderBottom="1px">
                administratifs, partout!🌍️
              </Text>
            </Stack>
          </Box>

          <Box>test</Box>
          <Box>
            {currentStep === 1 && (
              <Box>
                {/* Formulaire - Partie 1 */}
                <p>Formulaire - Partie 1</p>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  columnGap="10px"
                >
                
                  <Box
                    w="400px"
                    h="400px"
                    bg="white"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    rowGap="10px"
                  >
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="60%"
                        style={{
                          color: "black",
                          display: "flex",
                          justifyContent: "start",
                        }}
                      >
                       Num-Identification
                      </FormLabel>
                      <Input width="250px" bg="white" 
                      type="text" value={numId} onChange={(e) =>
                      	setNumId(e.target.value)}/>
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="60%"
                        style={{
                          color: "black",
                          display: "flex",
                          justifyContent: "start",
                        }}
                      >
                        Prenom
                      </FormLabel>
                      <Input width="250px" bg="white" type="text" value={prenom} 
                      	onChange={(e) => setPrenom(e.target.value)}/>
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="60%"
                        style={{
                          color: "black",
                          display: "flex",
                          justifyContent: "start",
                        }}
                      >
                        Nom
                      </FormLabel>
                      <Input width="250px" bg="white" type="text" value={nom} 
                      		onChange={(e) => setNom(e.target.value)} />
                    </FormControl>
                  </Box>
                  <Box
                    w="400px"
                    h="400px"
                    bg="white"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    rowGap="10px"
                  >
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="60%"
                        style={{
                          color: "black",
                          display: "flex",
                          justifyContent: "start",
                        }}
                      >
                        Telephone
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="60%"
                        style={{
                          color: "black",
                          display: "flex",
                          justifyContent: "start",
                        }}
                      >
                        email
                      </FormLabel>
                      <Input width="250px" bg="white" type="email" value={email} 
                      	onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="60%"
                        style={{
                          color: "black",
                          display: "flex",
                          justifyContent: "start",
                        }}
                      >
                        Num-registre
                      </FormLabel>
                      <Input width="250px" bg="white" type="text" value={numRegistre} 
                      	onChange={(e) => setNumRegistre(e.target.value)} />
                    </FormControl>
                  </Box>
                </Box>
                <Button onClick={handleNext}>Suivant</Button>
              </Box>
            )}
            {currentStep === 2 && (
              <Box>
                {/* Formulaire - Partie 2 */}
                <p>Formulaire - Partie 2</p>
                {/* Contenu de la deuxième partie du formulaire */}
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  columnGap="10px"
                >
                  <Box
                    w="400px"
                    h="400px"
                    bg="white"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    rowGap="10px"
                  >
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="60%"
                        style={{
                          color: "black",
                          display: "flex",
                          justifyContent: "start",
                        }}
                      >
                        Date de Naissance
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="60%"
                        style={{
                          color: "black",
                          display: "flex",
                          justifyContent: "start",
                        }}
                      >
                        Prenom pere
                      </FormLabel>
                      <Input width="250px" bg="white"  type="text" value={prenomPere} 
                      	onChange={(e) => setPrenomPere(e.target.value)}  />
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="60%"
                        style={{
                          color: "black",
                          display: "flex",
                          justifyContent: "start",
                        }}
                      >
                        Prenom mere👩‍🦱️
                      </FormLabel>
                      <Input width="250px" bg="white" type="text" value={prenomMere} 
                      	onChange={(e) => setPrenomMere(e.target.value)}  />
                    </FormControl>
                  </Box>
                  <Box
                    w="400px"
                    h="400px"
                    bg="white"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    rowGap="10px"
                  >
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="60%"
                        style={{
                          color: "black",
                          display: "flex",
                          justifyContent: "start",
                        }}
                      >
                        Nom mere
                      </FormLabel>
                      <Input width="250px" bg="white" type="text" value={nomMere} 
                      onChange={(e) => setNomMere(e.target.value)} />
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="60%"
                        style={{
                          color: "black",
                          display: "flex",
                          justifyContent: "start",
                        }}
                      >
                        Email
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="60%"
                        style={{
                          color: "black",
                          display: "flex",
                          justifyContent: "start",
                        }}
                      >
                        Region
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                  </Box>
                </Box>
                <Button onClick={handlePrev}>Précédent</Button>
                <Button onClick={handleNext}>Suivant</Button>
              </Box>
            )}
            {currentStep === 3 && (
              <Box>
                {" "}
                {/* Formulaire - Partie 3 */} <p>Formulaire - Partie 3</p>
                {/* Contenu de la troisième partie du formulaire */}
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  columnGap="10px"
                >
                  <Box w="400px" h="400px" bg="grey">
                    test
                  </Box>
                  <Box w="400px" h="400px" bg="white">
                    test
                  </Box>
                </Box>
                <Button onClick={handlePrev}>Précédent</Button>
                <Button type="submit">Soumettre</Button>
              </Box>
            )}
          </Box>
        </form>
    )

}

export default Forms;
