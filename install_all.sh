#!/bin/bash
# -*- ENCODING: UTF-8 -*-

echo -n "Welcome to StarterKit for Mac to Develop"
echo -n "Press enter to use \"$in\" or enter a new value: "
read userInput
if [[ -n "$userInput" ]]
then
    in=$userInput
fi
echo ... I will use $in.