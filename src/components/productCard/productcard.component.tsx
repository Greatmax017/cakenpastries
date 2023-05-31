import { Box, Flex, HStack, VStack, Text, Center } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Button from "../buttons/button.component";
import { useAppStore } from "@/lib/store";


type Props = {
    item: any
}


const ProductCard = ({item}: Props) => {
    const { addToCart } = useAppStore()

    return (
        <Box
        minW="320px"
        w="full"
        p="4"
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="md"
        bg="white"
        shadow="md"
        >
            <Center width={"full"} alignItems={"center"}>
                <Flex align={"center"} direction="column" width="full">
                    <Box position="relative" w="full" h="320px">
                    <Image
                        src={item?.image}
                        alt="Product Image"
                        layout="fill"
                        objectFit="cover"
                    />
                    </Box>
                    <VStack align="start" spacing="2" mt="4" flex="1">
                    <Text fontWeight="semibold" fontSize="xl" lineHeight="none">
                        NGN {parseInt(item?.price)}
                    </Text>
                    <Text fontSize="lg" fontWeight="semibold">
                        {item?.name}
                    </Text>
                
                    </VStack>
                    <HStack justify="center" width="full" mt="4">
                    <Button onClick={() => {
                        addToCart(item)
                    }}>Add to Cart</Button>

                    </HStack>
                </Flex>
            </Center>
       
        </Box>
    );
};

export default ProductCard;
