SHELL := /bin/bash

setup:
	@if [ ! -d ./node_modules ] ; then npm install ;fi

.PHONY:setup
