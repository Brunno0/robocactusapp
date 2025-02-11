import React, { useState } from "react";
import { Box, Flex, Text, IconButton, useToast } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

const CodeArduinoStyle = ({ title, code }) => {
  const [isCopied, setIsCopied] = useState(false);
  const toast = useToast();

  const handleCopyCode = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setIsCopied(true);
        toast({
          title: "Código copiado!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: "Erro ao copiar o código.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  return (
    <Box
      bg="gray.800"
      borderRadius="md"
      overflowX="auto"
      maxWidth="100%"
      fontFamily="monospace"
      color="gray.200"
      fontSize={{ base: "sm", md: "md" }}
      boxShadow="lg"
    >
      {/* Barra de título com botões */}
      <Flex
        bg="gray.700"
        p={2}
        borderTopRadius="md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="sm" color="gray.300" ml={2}>
          {title}
        </Text>
        <IconButton
          aria-label="Copiar código"
          icon={<CopyIcon />}
          size="sm"
          colorScheme="gray"
          onClick={handleCopyCode}
        />
      </Flex>

      {/* Código Arduino */}
      <Box p={4}>
        <Text as="pre" whiteSpace="pre-wrap">
          {code}
        </Text>
      </Box>
    </Box>
  );
};

export default CodeArduinoStyle;